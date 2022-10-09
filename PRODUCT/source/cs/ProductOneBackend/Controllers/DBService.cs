using Microsoft.AspNetCore.Mvc;

namespace ProductOneBackend.Controllers
{
    public class DBService : Controller
    {
        public static bool Insert(Object obj)
        {

            using (var session = PersistentManager.GetSessionFactory().OpenSession())
            {
                using(var transaction = session.BeginTransaction())
                {
                    session.Save(obj);
                    transaction.Commit();
                }
                session.Close();
            }
            return true;
        }

        public static bool Update(Object obj)
        {
            using (var session = PersistentManager.GetSessionFactory().OpenSession())
            {
                using (var transaction = session.BeginTransaction())
                {
                    session.Update(obj);
                    transaction.Commit();
                }
                session.Close();
            }
            return true;
        }
    }
}
