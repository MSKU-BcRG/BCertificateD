//-----------------------MSKU-----BCRG-----2018-----------------------
/*
Burada ise Transactionlarımızın gerçekleşmesi için gerekli methodları tanımlıyoruz
*/
//-----------------------MSKU-----BCRG-----2018-----------------------


/*
Burada gerekli bağlantıyı gerçekleştiriyoruz
Gelen parametremizin tipini beliredikten sonra bu methodun hangi trancastion'a bağladığını belirliyoruz
*/

/**
 * Sample transaction
 * @param {org.bcrg.msku.CertificateTrancastion} CertificateTrancastion
 * @transaction
 */
async function CertificateTrancastion(cs) {

    // Parametremiz içinde gelen Grade'ı sabit bir değişkende tutuyoruz (Tamamen keyfi)
    const currentGrade = cs.Grade;
    // Not kontrolü için gelen veriyi ufak bir şarttan geçiriyoruz
    if(currentGrade<70)
    {
        // Şartı sağlamaması durumunda ise basit bir hata döndürüyoruz
        throw new Error("Sertifika notu 70 üzerinde olmalıdır");
    }
    // Eğer hata ile karşılaşmazdan methodumuz çalışırsa, transaction gerçekleşmiş oluyor
   
}
