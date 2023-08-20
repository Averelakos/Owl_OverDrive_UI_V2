﻿using Microsoft.EntityFrameworkCore;
using Owl.Overdrive.Infrastructure.Persistence.Configurations;
using Owl.Overdrive.Infrastructure.Persistence.Configurations.CompanyConfigurations;
using Owl.Overdrive.Infrastructure.Persistence.Configurations.GameConfigurations;

namespace Owl.Overdrive.Infrastructure.Persistence.DbContexts
{
    public sealed partial class OwlOverdriveDbContext: DbContext
    {
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            ModelCreating(modelBuilder);
        }

        public void ModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new CompanyConfiguration());
            modelBuilder.ApplyConfiguration(new CompanyStatusConfiguration());
            modelBuilder.ApplyConfiguration(new CountryCodeConfiguration());
            modelBuilder.ApplyConfiguration(new ImagesDraftConfiguration());
            modelBuilder.ApplyConfiguration(new CompanyLogoConfiguration());
            modelBuilder.ApplyConfiguration(new PlatformConfiguration());
            modelBuilder.ApplyConfiguration(new RegionConfiguration());
            modelBuilder.ApplyConfiguration(new GameStatusConfiguration());
            modelBuilder.ApplyConfiguration(new LanguageConfiguration());

            // Game
            modelBuilder.ApplyConfiguration(new GameConfiguration());
            modelBuilder.ApplyConfiguration(new GameEditionConfiguration());
            modelBuilder.ApplyConfiguration(new AlternativeNameConfiguration());
            modelBuilder.ApplyConfiguration(new GameLocalizationConfiguration());
            modelBuilder.ApplyConfiguration(new ReleaseDateConfiguration());
            modelBuilder.ApplyConfiguration(new WebsitesConfiguration());
            modelBuilder.ApplyConfiguration(new InvovlvedCompanyConfiguration());
            modelBuilder.ApplyConfiguration(new InvolvedCompanyPlatformConfiguration());
            modelBuilder.ApplyConfiguration(new LanguageSupportConfiguration());
            modelBuilder.ApplyConfiguration(new LanguageSupportTypeConfiguration());
            
        }
    }
}
