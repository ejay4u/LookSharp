﻿using System;
using System.Configuration;
using LookSharp.Models;
using MongoDB.Driver;

namespace LookSharp
{
    public class MongoContext
    {
        private readonly IMongoDatabase _database;
        public MongoContext()        //constructor   
        {
            //var connectionString = "mongodb://appuser:Pa$$w0rd@aws-eu-west-1-portal.8.dblayer.com:18904,aws-eu-west-1-portal.9.dblayer.com:18904/passiton?authSource=admin&ssl=true";
            //var client = new MongoClient(connectionString);

            var connectionString = ConfigurationManager.AppSettings.Get("MONGOLAB_URI_TEST");
            var url = new MongoUrl(connectionString);
            var client = new MongoClient(url);       
            _database = client.GetDatabase(url.DatabaseName);

            // Reading credentials from Web.config file   
            /*var mongoDatabaseName = ConfigurationManager.AppSettings["MongoDatabaseName"]; //CarDatabase  
            var mongoUsername = ConfigurationManager.AppSettings["MongoUsername"]; //demouser  
            var mongoPassword = ConfigurationManager.AppSettings["MongoPassword"]; //Pass@123  
            var mongoPort = ConfigurationManager.AppSettings["MongoPort"];  //27017  
            var mongoHost = ConfigurationManager.AppSettings["MongoHost"];  //localhost  

            // Creating credentials  
            var credential = MongoCredential.CreateMongoCRCredential
                            (mongoDatabaseName,
                             mongoUsername,
                             mongoPassword);

            //// Creating MongoClientSettings  
            var settings = new MongoClientSettings
            {
                Credentials = new[] { credential },
                Server = new MongoServerAddress(mongoHost, Convert.ToInt32(mongoPort))
            };
            var client = new MongoClient(settings);
            _database = client.GetDatabase("Passiton");*/
        }

        public IMongoCollection<Business> Businesses
        {
            get
            {
                return _database.GetCollection<Business>("Business");
            }
        }

        public IMongoCollection<Campaign> Campaigns
        {
            get
            {
                return _database.GetCollection<Campaign>("Campaign");
            }
        }

        public IMongoCollection<CampaignCode> CampaignCodes
        {
            get
            {
                return _database.GetCollection<CampaignCode>("CampaignCode");
            }
        }

        public IMongoCollection<Models.PassItOn> PassItOns
        {
            get
            {
                return _database.GetCollection<Models.PassItOn>("PassItOn");
            }
        }

        public IMongoCollection<AdInfo> AdInfos
        {
            get
            {
                return _database.GetCollection<AdInfo>("AdInfo");
            }
        }

        public IMongoCollection<CodeCard> CodeCard
        {
            get
            {
                return _database.GetCollection<CodeCard>("CodeCard");
            }
        }

        public IMongoCollection<CodeFailure> CodeFailure
        {
            get
            {
                return _database.GetCollection<CodeFailure>("CodeFailure");
            }
        }
    }
}