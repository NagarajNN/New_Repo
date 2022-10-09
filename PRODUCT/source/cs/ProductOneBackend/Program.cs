using Microsoft.Extensions.FileProviders;
using Serilog;

var builder = WebApplication.CreateBuilder(args);
string _AppCorsPolicy = "AppCorsPolicy";

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
ProductOneBackend.Controllers.PersistentManager.Initialize();
builder.Services.AddCors(options =>
{
    options.AddPolicy(_AppCorsPolicy,
        builder =>
        {
            builder.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

Log.Logger = new LoggerConfiguration()
               .WriteTo.File($"{Path.Combine(Directory.GetCurrentDirectory())}/ Logs/log.txt", rollingInterval: RollingInterval.Day)
               .CreateLogger();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
}
app.UseFileServer(new FileServerOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "")),
    RequestPath = "",
    EnableDefaultFiles = true
});
app.UseStaticFiles();

app.UseAuthorization();

app.MapControllers();

app.Run();
