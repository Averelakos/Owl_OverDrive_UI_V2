﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Owl.Overdrive.Business.DTOs.LookupsDtos
{
    /// <summary>
    /// Company lookup dto
    /// </summary>
    /// <seealso cref="Owl.Overdrive.Business.DTOs.LookupsDtos.BaseLookupDto" />
    public class CompanyStatusLookupDto: BaseLookupDto
    {
        /// <summary>
        /// Company description
        /// </summary>
        public string? Description { get; set; } = null!;
    }
}