using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Movies.API.DatabaseContext;
using Movies.API.Encrypt;
using Movies.API.Models;
using Movies.API.Request.Users;
using Movies.API.Services;

namespace Movies.API.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class UserController : ControllerBase
{
    [AllowAnonymous]
    [HttpPost]
    public async Task<IActionResult> Create(
        [FromBody] UserCreateRequest request
        )
    {
        // Valida reCAPTCHA antes de criar o usuário
        var (isHuman, reason) = await Services.RecaptchaService.ValidateToken(request.RecaptchaToken, "register");
        if (!isHuman)
            return BadRequest($"reCAPTCHA failed: {reason}");

        var userService = new UserService();

        var isCreated = userService.Create(request);
        if (!isCreated)
            return BadRequest("Error to create user!");

        return Ok("User created with success!");
    }

    [HttpGet("{id:int}")]
    public IActionResult GetById(int id)
    {
        var userService = new UserService();

        var user = userService.GetById(id);

        if (user is null)
            return NotFound("User not found!");

        return Ok(user);
    }

    [HttpPut("{id:int}")]
    public IActionResult Update(
        int id,
        [FromBody] UserUpdateRequest request)
    {
        var userService = new UserService();
        var isUpdated = userService.Update(id, request);

        if (!isUpdated)
            return BadRequest("Error to update user!");

        return Ok("User updated with success!");
    }

    [HttpDelete("{id:int}")]
    public IActionResult Delete(int id)
    {
        var userService = new UserService();

        var isDeleted = userService.Delete(id);

        if (!isDeleted)
            return BadRequest("Error to delete user!");

        return Ok($"The user with id {id} has been deleted");
    }

    [HttpGet("get-all")]
    public IActionResult GetAll()
    {
        var userService = new UserService();
        var users = userService.GetAll();
        return Ok(users);
    }
}
