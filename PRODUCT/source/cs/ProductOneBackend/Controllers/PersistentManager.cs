using Microsoft.AspNetCore.Mvc;
using NHibernate;
using NHibernate.Cfg;
using NHibernate.Dialect;
using NHibernate.Mapping.ByCode;
using NHibernate.Tool.hbm2ddl;
using ProductOneBackend.PersistentObjects;
using System.Reflection;

namespace ProductOneBackend.Controllers
{
    public class PersistentManager : Controller
    {
      public static ISessionFactory Session =null;
      public static Configuration configuration=null;
        public static void Initialize()
        {
            configuration = new NHibernate.Cfg.Configuration();
            configuration.DataBaseIntegration(x =>
            {

                x.ConnectionString = "Server = localhost;Port = 5432; Database = projectOne; User Id = postgres; Password=12345678";
                x.Driver<NHibernate.Driver.NpgsqlDriver>();
                x.Dialect<PostgreSQLDialect>();
                x.LogFormattedSql = true;
                x.LogSqlInConsole = true;
            });

            var mapper = new ModelMapper();
            Dictionary<string,Type> typeNames = new Dictionary<string,Type>();
            var types = Assembly.GetExecutingAssembly().GetTypes().Where(t=>t.IsClass).ToList();
            foreach (var type in types)
            {
                if (type.FullName.EndsWith("Map"))
                {
                    if(type != null)
                    {
                        typeNames.Add(type.FullName, type);

                    }
                }
            }
            foreach(var type in typeNames)
            {
                mapper.AddMapping(type.Value);
            }
            var mapping = mapper.CompileMappingForAllExplicitlyAddedEntities();
            configuration.AddMapping(mapping);
            var exporter = new SchemaUpdate(configuration);
            exporter.Execute(false,true);
            Session = configuration.BuildSessionFactory();

        }
        public static ISessionFactory GetSessionFactory()
        {
          
            return Session;
        }
    
    }
}
