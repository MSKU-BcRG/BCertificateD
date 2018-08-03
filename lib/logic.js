<BCertifieD kaynak kodları.>
Copyright (C) <2018> <SafakOksuzer>

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.


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
