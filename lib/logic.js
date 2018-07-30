
/**
 * Sample transaction
 * @param {org.bcrg.msku.CertificateTrancastion} CertificateTrancastion
 * @transaction
 */
async function CertificateTrancastion(cs) {
    // Not kontrolü için gelen veriyi ufak bir şarttan geçiriyoruz
    const currentGrade = cs.Grade;

    if(currentGrade<70)
    {
        throw new Error("Sertifika notu 70 üzerinde olmalıdır");
    }
   
}
