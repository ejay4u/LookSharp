using System;
using System.Threading.Tasks;
using System.Web.Http;
using LookSharp.Models;
using Microsoft.Ajax.Utilities;

namespace LookSharp.Controllers.Api
{
    public class LookSharpController : ApiController
    {
        private readonly DataAccess _dataAccess;

        public LookSharpController()
        {
            _dataAccess = new DataAccess();
        }

        // GET api/PassItOn/
        [HttpGet]
        public Task<object> LookSharp()
        {
            return null;
        }

        // POST api/PassItOn/
        [HttpPost]
        public async Task<string> LookSharp(PassItOn passItOn)
        {
            if (!passItOn.PassitCode.Trim().IsNullOrWhiteSpace())
            {
                var ch = passItOn.PassitCode.Trim().Remove(1);
                var id = passItOn.PassitCode.Trim().Remove(0, 1);
                var campaignInfo = await _dataAccess.LookSharp(id, ch);

                if (campaignInfo)
                {
                    return "Success";
                }
                return "Sorry, incorrect choice.";
            }
            return "Sorry, incorrect choice.";
        }
    }
}
