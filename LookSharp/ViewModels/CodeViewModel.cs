using System.Collections.Generic;
using System.Web.Mvc;
using LookSharp.Models;

namespace LookSharp.ViewModels
{
    public class CodeViewModel
    {
        public IEnumerable<SelectListItem> CountryList { get; set; }
        public IEnumerable<SelectListItem> CampaignList { get; set; }
        public IEnumerable<SelectListItem> BusinessList { get; set; }
        public IEnumerable<CampaignCode> CampaignCodes { get; set; }
        public CampaignCode CampaignCode { get; set; }
        public Campaign Campaign { get; set; }
    }
}