using NHibernate.Mapping.ByCode.Conformist;

namespace ProductOneBackend.PersistentObjects
{
    public class ProductInfo
    {
        public virtual string installationId { get; set; }

        public virtual string adminName { get; set; }

        public virtual string adminEmail { get; set; }

        public ProductInfo()
        {

        }
        public ProductInfo(ProductInfo info)
        {
            installationId = info.installationId;
            adminName = info.adminName;
            adminEmail = info.adminEmail;
        }

        
    }

    public class ProductInfoMap : ClassMapping<ProductInfo>
    {
        public ProductInfoMap()
        {
            Table(nameof(ProductInfoMap));
            Property(x => x.installationId);
            Property(x => x.adminName);
            Property(x=> x.adminEmail);
        }

    }
    
   
}
