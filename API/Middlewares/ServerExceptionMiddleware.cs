using System;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using API.Errors;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API.Middlewares
{
    public class ServerExceptionMiddleware
    {
        private readonly RequestDelegate _request;
        private readonly ILogger<ServerExceptionMiddleware> _logger;
        private readonly IHostEnvironment _env;

        public ServerExceptionMiddleware(RequestDelegate request,
                                         ILogger<ServerExceptionMiddleware> logger,
                                         IHostEnvironment env)
        {
            _request = request;
            _logger = logger;
            _env = env;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _request(context);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);

                var response = new ApiException((int)HttpStatusCode.InternalServerError, ex.Message, ex.StackTrace.ToString());
                var jsonSerializationOptions = new JsonSerializerOptions {PropertyNamingPolicy = JsonNamingPolicy.CamelCase};
                var jsonResponse = JsonSerializer.Serialize(response, jsonSerializationOptions);

                context.Response.StatusCode = 500;
                context.Response.ContentType = "application/json";
                await context.Response.WriteAsync(jsonResponse);
            }
        }
    }
}