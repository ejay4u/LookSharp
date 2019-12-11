using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LookSharp.Models
{
    public class CodeFailure
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string MobileNo { get; set; }
        public int FailureCount { get; set; }
        public int SuspendedFor { get; set; }
        public bool NumberStatus { get; set; }
        public DateTime TimeCreated { get; set; }
        public DateTime ReactivationTime { get; set; }
    }
}