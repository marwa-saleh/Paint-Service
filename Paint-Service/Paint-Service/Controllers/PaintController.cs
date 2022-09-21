using Microsoft.AspNetCore.Mvc;

namespace NETCORE_TS_MVC.Controllers
{
    public class PaintController : Controller
    {
        private readonly ILogger<PaintController> _logger;

        public PaintController(ILogger<PaintController> logger)
        {
            _logger = logger;
        }


        public IActionResult Paint()
        {

            //create session Id
            return RedirectToAction("getSession", new { sessionId = 123 });
        }

        public IActionResult getSession(long sessionId)
        {

            return View();
        }


        public ActionResult GetClientMessages()
        {

            return Content("Success");
        }



    }
}
