namespace Movies.API.Request.Users;

public class UserCreateRequest
{
    public string Username { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string RecaptchaToken { get; set; } = string.Empty;
}
