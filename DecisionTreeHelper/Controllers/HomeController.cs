using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DecisionTreeHelper.Models;
using System.IO;
using Newtonsoft.Json;

namespace DecisionTreeHelper.Controllers
{
    public class Result
    {
        public string Question { get; set; }
        public string Answer { get; set; }
        public string Error { get; set; }
    }


    public class Question
    {
        public string QuestionID { get; set; }
        public string QuestionStatement { get; set; }
        public string ParentQuestionID { get; set; }
        public bool Answer { get; set; }
        public List<Question> questions { get; set; }
    }
    
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public void SubmitResult(string result)
        {
            //save json searlize data of questions and answers in result.txt file
            System.IO.File.WriteAllText(@"result.txt", result);
        }

        [HttpGet]
        public List<Result> GetDecisionTree()
        {
            List<Result> result = new List<Result>();
            try
            {
                string fileContents = null;
                using (StreamReader sr = new StreamReader(@"result.txt"))
                {
                    string line = sr.ReadToEnd();
                    fileContents += line;
                }

                result = JsonConvert.DeserializeObject<List<Result>>(fileContents);
            }
            catch (FileNotFoundException)
            {
                result.Add(new Result { Error = "Result not found. Please start a Quiz!" });
            }
            return result;
        }
    }
}
