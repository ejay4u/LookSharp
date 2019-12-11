using System.Threading.Tasks;
using System.Web.Http;
using LookSharp.Models;

namespace LookSharp.Controllers.Api
{
    public class GenCardsController : ApiController
    {
        private readonly DataAccess _dataAccess;

        public GenCardsController()
        {
            _dataAccess = new DataAccess();
        }

        // POST api/PassItOn/
        [HttpGet]
        public async Task<object> GenCards()
        {
            return await _dataAccess.GetAllGenCards();
        }

        // POST api/PassItOn/id
        [HttpGet]
        public async Task<object> GenCards(string gedCard)
        {
            return await _dataAccess.GetGenCard(gedCard);
        }

        //DELETE api/gencards/1
        [HttpDelete]
        public async Task<bool> RemoveCard(string id)
        {
            return await _dataAccess.RemoveCard(id);
        }

    }
}
