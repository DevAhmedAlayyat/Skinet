using API.Dtos;
using AutoMapper;
using Core.Entities;

namespace API.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(d => d.ProductBrand, opt => opt.MapFrom(p => p.ProductBrand.Name))
                .ForMember(d => d.ProductType, opt => opt.MapFrom(p => p.ProductType.Name))
                .ForMember(d => d.PictureUrl, opt => opt.MapFrom<ProductPictureUrlResolver>());
        }
    }
}