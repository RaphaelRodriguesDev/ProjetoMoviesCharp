using System.Globalization;
using System.Text.Json;

namespace Movies.API.Services;

public static class RecaptchaService
{
    private static readonly HttpClient _httpClient = new();

    public static async Task<(bool isValid, string reason)> ValidateToken(string token, string expectedAction)
    {
        if (string.IsNullOrWhiteSpace(token))
            return (false, "Token vazio ou nulo");

        IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();

        var secretKey = configuration.GetSection("RecaptchaSettings:SecretKey").Value;
        var minScore = double.Parse(
            configuration.GetSection("RecaptchaSettings:MinScore").Value ?? "0.5",
            CultureInfo.InvariantCulture
        );

        if (string.IsNullOrEmpty(secretKey))
            return (false, "SecretKey não configurada");

        // Envia como form-encoded (recomendado pelo Google)
        var content = new FormUrlEncodedContent(new[]
        {
            new KeyValuePair<string, string>("secret", secretKey),
            new KeyValuePair<string, string>("response", token)
        });

        var response = await _httpClient.PostAsync("https://www.google.com/recaptcha/api/siteverify", content);
        var json = await response.Content.ReadAsStringAsync();

        var result = JsonSerializer.Deserialize<RecaptchaResponse>(json);

        if (result == null) return (false, $"Resposta nula. JSON: {json}");
        if (!result.success) return (false, $"success=false. JSON: {json}");
        if (result.score < minScore) return (false, $"score={result.score} < {minScore}");
        if (result.action != expectedAction) return (false, $"action='{result.action}' != '{expectedAction}'");

        return (true, "OK");
    }
}

public class RecaptchaResponse
{
    public bool success { get; set; }
    public double score { get; set; }
    public string action { get; set; } = string.Empty;
    public string challenge_ts { get; set; } = string.Empty;
    public string hostname { get; set; } = string.Empty;
}
