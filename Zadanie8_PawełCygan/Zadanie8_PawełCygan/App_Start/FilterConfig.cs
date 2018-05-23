using System.Web;
using System.Web.Mvc;

namespace Zadanie8_PawełCygan
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
