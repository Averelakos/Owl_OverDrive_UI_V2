﻿using Microsoft.EntityFrameworkCore;
using Owl.Overdrive.Domain.Entities;
using Owl.Overdrive.Domain.Entities.Company;
using Owl.Overdrive.Infrastructure.Persistence.DbContexts;
using Owl.Overdrive.Repository.Contracts;

namespace Owl.Overdrive.Repository.Repositories
{
    public class CompanyLogoRepository : BaseRepository<CompanyLogo>, ICompanyLogoRepository
    {
        public CompanyLogoRepository(OwlOverdriveDbContext dbContext) : base(dbContext)
        {
        }

        public async Task Insert(CompanyLogo companyLogo)
        {
            await base.Insert(companyLogo);
        }

    }
}
