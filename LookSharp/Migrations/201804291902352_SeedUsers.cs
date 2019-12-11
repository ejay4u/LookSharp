using System.Data.Entity.Migrations;

namespace LookSharp.Migrations
{
    public partial class SeedUsers : DbMigration
    {
        public override void Up()
        {
            Sql(@"
INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'61f73345-2fe6-41eb-99bb-7fe8dc6e595c', N'guest@passiton.live', 0, N'AGFs10BgONyfWtsz5qm4o7JV7D73IX+Z5bLOo5eDWQJW53Um0wGskn6RV/Deqm6m6w==', N'd471a5b5-00bc-44e8-af7f-5a11f5d7dff1', NULL, 0, 0, NULL, 1, 0, N'guest@passiton.live')
INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'd62b3d28-46e4-4c24-9c9c-82e4bd9a3e8e', N'admin@passiton.live', 0, N'AIkaPdxPu+Dzm0pfzn4PjTwFtQgFVfqmYxXsJLLSqMF3cffMNO5BNJ8iIZk4mghq7g==', N'2de405f1-7f0d-4b41-b143-6231c2a72e06', NULL, 0, 0, NULL, 1, 0, N'admin@passiton.live')
INSERT INTO [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'29cc2aae-3948-452b-baf4-76ce17ceb5ff', N'CanManageCampaigns')
INSERT INTO [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'd62b3d28-46e4-4c24-9c9c-82e4bd9a3e8e', N'29cc2aae-3948-452b-baf4-76ce17ceb5ff')
");
        }
        
        public override void Down()
        {
        }
    }
}
