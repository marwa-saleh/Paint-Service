using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Paint_Service.Models;

namespace Paint_Service.Controllers
{
    public class PaintController : Controller
    {
        private readonly ILogger<PaintController> _logger;
        private Dictionary<long, List<IShape>>  _sessionMap;

        public PaintController(ILogger<PaintController> logger)
        {
            _logger = logger;
            _sessionMap = new Dictionary<long, List<IShape>>();
        }

        public IActionResult Paint()
        {

            Random rnd = new Random();
            int num = rnd.Next();

            while (_sessionMap.ContainsKey(num))
            {
                num = rnd.Next();
            }
      
            _sessionMap.Add(num, new List<IShape>());
            return RedirectToAction("getSession", new { sessionId = num });
        }

        public IActionResult getSession(long sessionId)
        {
            //View of buttoms and canvas in cshtml
            //List<IShape> shapes = _sessionMap[sessionId];

            return View("paint-layout");
        }


        [HttpPost]
        public IActionResult CreateShape(long shape)
        {
            //View of buttoms and canvas in cshtml
            return View("");
        }

        public ActionResult GetClientMessages()
        {

            return Content("Success");
        }



    }
}
