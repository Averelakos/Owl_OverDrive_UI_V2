﻿using AutoMapper;
using Owl.Overdrive.Business.Contracts;
using Owl.Overdrive.Business.DTOs.CompanyDtos;
using Owl.Overdrive.Business.Facades.Base;
using Owl.Overdrive.Domain.Entities;
using Owl.Overdrive.Repository.Contracts;

namespace Owl.Overdrive.Business.Facades
{
    public class CompanyFacade : BaseFacade, ICompanyFacade
    {
        public CompanyFacade(IRepositoryUnitOfWork repoUoW, IMapper mapper) : base(repoUoW, mapper)
        {
        }

        public async Task Create(CreateCompanyDto createCompanyDto)
        {
            var company = _mapper.Map<Company>(createCompanyDto);

            //TODO: set createby and lastupdateby
            var result = await _repoUoW.CompanyRepository.Insert(company);
        }

        public async Task<List<SearchParentCompanyDto>> Search(string searchInput)
        {
            List<SearchParentCompanyDto> result = new List<SearchParentCompanyDto>();
            if(!string.IsNullOrWhiteSpace(searchInput) && searchInput.Length > 2)
            {
               var list = await _repoUoW.CompanyRepository.Search(searchInput);
               result = _mapper.Map<List<SearchParentCompanyDto>>(list);
            }

            return result;
        }
    }
}
