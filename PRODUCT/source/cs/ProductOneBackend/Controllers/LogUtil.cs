using Serilog;

namespace ProductOneBackend.Controllers
{
    public class LogUtil
    {
        public static void Info(string msg)
        {
            Log.Information(msg);
        }
        public static void Error(string msg)
        {
            Log.Error(msg); 
        }
        public static void Debug(string msg)
        {
            Log.Debug(msg);
        }
    }
}
