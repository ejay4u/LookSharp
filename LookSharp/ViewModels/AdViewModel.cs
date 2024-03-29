﻿using System.Collections.Generic;
using System.Web.Mvc;
using LookSharp.Models;

namespace LookSharp.ViewModels
{
    public class AdViewModel
    {
        public string ImageUrl { get; set; }
        public string AudioUrl { get; set; }
        public string VideoUrl { get; set; }
        public string VideoHost { get; set; }
        public string Id { get; set; }
        public AdInfo AdInfo { get; set; }
        public IEnumerable<SelectListItem> VideoHostList { get; set; }
        public IEnumerable<SelectListItem> CountryList { get; set; }
        public IEnumerable<SelectListItem> CampaignList { get; set; }
        public IEnumerable<SelectListItem> AddTypeList { get; set; }
    }
}