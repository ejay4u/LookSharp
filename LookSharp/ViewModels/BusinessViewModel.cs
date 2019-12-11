using System.Collections.Generic;
using System.Web.Mvc;
using LookSharp.Models;

namespace LookSharp.ViewModels
{
    public class BusinessViewModel
    {
        public IEnumerable<SelectListItem> CountryList { get; set; }
        public Business Business { get; set; }
        public string Id { get; set; }
    }
}