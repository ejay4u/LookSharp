﻿using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LookSharp.Models
{
    public class CodeCard
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string CampaignId { get; set; }
        public string Quantity { get; set; }
        public string CreatedBy { get; set; }
        public DateTime TimeCreated { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime TimeUpdated { get; set; }
    }
}