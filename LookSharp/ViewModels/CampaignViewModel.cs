using System.Collections.Generic;
using System.Web.Mvc;
using LookSharp.Models;

namespace LookSharp.ViewModels
{
    public class CampaignViewModel
    {
        public IEnumerable<SelectListItem>BusinessName { get; set; }
        public IEnumerable<SelectListItem> CountryList { get; set; }
        public IEnumerable<SelectListItem> CampaignNetwork { get; set; }
        public IEnumerable<string> SelectedCampaignNetwork { get; set; }
        public IEnumerable<Campaign> CampaignView { get; set; }
        public Campaign Campaign { get; set;}
        public string Id { get; set; }
    }
}