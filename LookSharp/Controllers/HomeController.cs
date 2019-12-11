using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Mvc;
using LookSharp.Models;
using LookSharp.ViewModels;
using Microsoft.Ajax.Utilities;
using MongoDB.Bson;
using MongoDB.Driver;
using Newtonsoft.Json.Linq;

namespace LookSharp.Controllers
{
    [AllowAnonymous]
    public class HomeController : Controller
    {
        private readonly DataAccess _dataAccess;
        readonly MongoContext _dbContext;

        public HomeController()
        {
            _dbContext = new MongoContext();
            _dataAccess = new DataAccess();
        }

        public ActionResult Index()
        {
            //var xip = "41.139.29.42";
            var xip = "";
            xip = Request.UserHostAddress;
            if (Request.Headers["X-Forwarded-For"] != null)
            {
                xip = Request.Headers["X-Forwarded-For"];

            }
            else if(Request.Headers["REMOTE_ADDR"] != null)
            {
                xip = Request.Headers["REMOTE_ADDR"];
            }

            if (xip != null && xip.IndexOf(",", StringComparison.Ordinal) > 0)
            {
                string[] arIPs = xip.Split(',');

                xip = arIPs.First();
            }

            //Get User Country
            var userCountry = GetUserInfo(xip);

            //Get Country AdInfo
            var builder = Builders<AdInfo>.Filter;
            var filter = builder.Type("CampaignId", BsonType.Null) & builder.Eq("AdType", "LookSharp-Video") & builder.Eq("AdCountry", userCountry.Result) & builder.Eq("AdStatus", true);
            var passAd = _dbContext.AdInfos.Find(filter).ToList();


            //Get LookSharp Time   NOTE: GET USER'S TIME FOR TIME COMPARISON
            var builder2 = Builders<Campaign>.Filter;
            //var filter2 = builder2.Eq("CampaignCountry", userCountry.Result) & builder2.Eq("CampaignTitle", "LookSharp") & builder2.Gt("StartTime", DateTime.Now.ToUniversalTime()) & builder2.Eq("CampaignStatus", true);
            var filter2 = builder2.Eq("CampaignCountry", userCountry.Result) & builder2.Gt("StartTime", DateTime.Now.ToUniversalTime()) & builder2.Eq("CampaignStatus", true);

            var lookSharp = _dbContext.Campaigns.Find(filter2).FirstOrDefault();

            List<PassAd> pAd = new List<PassAd>();

            if (passAd.Count > 0 && lookSharp != null)
            {
                foreach (var adInfo in passAd)
                {
                    var ad = new PassAd
                    {
                        AdType = adInfo.AdType,
                        VideoUrl = adInfo.AdMedia.GetElement("VideoUrl").Value.ToString(),
                        VideoHost = adInfo.AdMedia.GetElement("VideoHost").Value.ToString(),
                        StartTime = lookSharp.StartTime.AddHours(-1),
                        EndTime = lookSharp.EndTime.AddHours(-1)
                    };
                    pAd.Add(ad);

                    /*if (adInfo.AdType.Equals("Background-Image"))
                    {
                        var ad = new PassAd
                        {
                            AdType = adInfo.AdType,
                            ImageUrl = adInfo.AdMedia.GetElement("ImageUrl").Value.ToString()
                        };
                        pAd.Add(ad);
                    }
                    else if (adInfo.AdType.Equals("Background-Audio"))
                    {
                        var ad = new PassAd
                        {
                            AdType = adInfo.AdType,
                            ImageUrl = adInfo.AdMedia.GetElement("AudioUrl").Value.ToString()
                        };
                        pAd.Add(ad);
                    }
                    else if (adInfo.AdType.Equals("Background-Video(mute)"))
                    {
                        var ad = new PassAd
                        {
                            AdType = adInfo.AdType,
                            VideoUrl = adInfo.AdMedia.GetElement("VideoUrl").Value.ToString(),
                            VideoHost = adInfo.AdMedia.GetElement("VideoHost").Value.ToString()
                        };
                        pAd.Add(ad);
                    }
                    else if (adInfo.AdType.Equals("PassItCode-Image"))
                    {
                        var ad = new PassAd
                        {
                            AdType = adInfo.AdType,
                            ImageUrl = adInfo.AdMedia.GetElement("ImageUrl").Value.ToString()
                        };
                        pAd.Add(ad);
                    }
                    else if (adInfo.AdType.Equals("PassItCode-Video"))
                    {
                        var ad = new PassAd
                        {
                            AdType = adInfo.AdType,
                            VideoUrl = adInfo.AdMedia.GetElement("VideoUrl").Value.ToString(),
                            VideoHost = adInfo.AdMedia.GetElement("VideoHost").Value.ToString()
                        };
                        pAd.Add(ad);
                    }
                    else if (adInfo.AdType.Equals("PhoneNo-Image(Default)"))
                    {
                        var ad = new PassAd
                        {
                            AdType = adInfo.AdType,
                            ImageUrl = adInfo.AdMedia.GetElement("ImageUrl").Value.ToString()
                        };
                        pAd.Add(ad);
                    }
                    else if (adInfo.AdType.Equals("PhoneNo-Video(Default)"))
                    {
                        var ad = new PassAd
                        {
                            AdType = adInfo.AdType,
                            VideoUrl = adInfo.AdMedia.GetElement("VideoUrl").Value.ToString(),
                            VideoHost = adInfo.AdMedia.GetElement("VideoHost").Value.ToString()
                        };
                        pAd.Add(ad);
                    }*/

                }
            }
            else
            {
                var ad = new PassAd
                {
                    AdType = "None",
                    ImageUrl = xip
                };
                pAd.Add(ad);
            }

            var passitonViewModel = new PassItOnViewModel()
            {
                PassItAds = pAd
            };

            return View(passitonViewModel);

        }

        [HttpPost]
        public async Task<object> Index(string country)
        {
            return await _dataAccess.GetInit(country);
        }

        public async Task<object> GetUserInfo(string ip)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://json.geoiplookup.io/" + ip);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                var response = client.GetAsync("/").Result;
                if (response.IsSuccessStatusCode)
                {
                    var data = await response.Content.ReadAsStringAsync();
                    JObject json = JObject.Parse(data);
                    //return json.GetValue("country_name").ToString();
                    return "Sweden";
                }
            }

            /*using (var client = HttpClient)
            {
                client.BaseAddress = new Uri("http://api.ipstack.com");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                var response = client.GetAsync("/" + ip + "?access_key=9a6df3f5e5df7534b43efd126b9fe85e").Result;
                //var response = client.GetAsync("/check?access_key=9a6df3f5e5df7534b43efd126b9fe85e").Result;
                if (response.IsSuccessStatusCode)
                {
                    var data = await response.Content.ReadAsStringAsync();
                    JObject json = JObject.Parse(data);
                    return json.GetValue("country_name").ToString();
                }
            }*/

            return null;
        }

        public string UserInfo(string ip)
        {
            WebClient client = new WebClient { Headers = { ["Accept"] = "application/json" } };
            string uD = client.DownloadString(new Uri("https://json.geoiplookup.io/" + ip));
            if (!uD.IsNullOrWhiteSpace())
            {
                JObject json = JObject.Parse(uD);
                return json.GetValue("country_name").ToString();
            }
            return null;
        }

        public ActionResult LookSharp(string uT)
        {
            if (uT.IsNullOrWhiteSpace())
                return RedirectToAction("Index");

            var xip = "";
            xip = Request.UserHostAddress;
            if (Request.Headers["X-Forwarded-For"] != null)
            {
                xip = Request.Headers["X-Forwarded-For"];

            }
            else if (Request.Headers["REMOTE_ADDR"] != null)
            {
                xip = Request.Headers["REMOTE_ADDR"];
            }

            if (xip != null && xip.IndexOf(",", StringComparison.Ordinal) > 0)
            {
                string[] arIPs = xip.Split(',');

                xip = arIPs.First();
            }

            //Get User Country
            var userCountry = GetUserInfo(xip);

            //Get LookSharp Time
            if (uT.Trim().Length == 25)
            {
                //2018-12-01T14:17:10+00:00
                string userTime = uT.Trim().Remove(19);

                //NOTE: GET USER'S TIME FOR TIME COMPARISON
                var builder = Builders<Campaign>.Filter;
                var filter = builder.Eq("CampaignCountry", userCountry.Result) & builder.Gt("EndTime", DateTime.Parse(userTime)) & builder.Eq("CampaignTitle", "LookSharp") & builder.Eq("CampaignStatus", true);
                var lookSharp = _dbContext.Campaigns.Find(filter).FirstOrDefault();

                if (lookSharp == null)
                {
                    return RedirectToAction("Index");
                }
                var campaign = new Campaign()
                {
                    Id = lookSharp.Id,
                    EndTime = lookSharp.EndTime
                    
                };

                return View(campaign);
            }
            return RedirectToAction("Index");
        }

        public ActionResult About()
        {
            return View();    
        }
    }
}