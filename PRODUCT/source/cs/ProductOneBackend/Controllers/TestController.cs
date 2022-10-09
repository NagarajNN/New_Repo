using Microsoft.AspNetCore.Mvc;

namespace ProductOneBackend.Controllers
{
    [Route("api/test")]
    public class TestController
    {
        [HttpGet]
        [Route("ping")]
        public string Ping()
        {
            LogUtil.Info("called");
            return "Pong";
        }
    }
}
