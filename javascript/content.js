const totalData = ['angkorWat', 'apsara', 'bakheng', 'bakong', 'bayong', 'chapei', 'lakhon', 'mekhala'];
const image = [
    '/image/angkor-wat.jpg', '/image/apsara.jpg', '/image/bakheng.jpg', '/image/bakong.jpg',
    '/image/bayon.jpg', '/image/chapei.jpg', '/image/lakhon.jpg', '/image/mekhala.jpg'
];
const title = [
    'អង្គរវត្ត គឺជាវិមានសំខាន់នៃតំបន់អង្គរ', `របាំអប្សរា គឺជាល្ខោនខោលសម្រាប់របាំព្រះរាជទ្រព្យកម្ពុជា`,
    `ប្រាសាទបាខែង គឺជាប្រាសាទមួយនៃតំបន់អង្គរ`, `ប្រាសាទបាគង គឺជាប្រាសាទរលួសនៃតំបន់អង្គរ`, `ប្រាសាទបាយ័ន គឺជាប្រាសាទសំខាន់នៃអង្គរធំក្នុងតំបន់អង្គរ`,
    `ចាប៉ីដងវែង`, `ល្ខោនខោល (ល្ខោន​របាំង​មុខ​បុរស)`, `របាំព្រះមុនីមាឃលា គឺជារបាំព្រះរាជទ្រព្យនៃព្រះរាជាណាចក្រកម្ពុជា`
];
const detail = [
    `ប្រទេស​កម្ពុជា​ ជា​កន្លែង​នៃ​ប្រាសាទ​ពុទ្ធសាសនា​ដែល​គេ​ស្គាល់​ថា ​ជា​ប្រាសាទ​អង្គរវត្ត​អស់​ជាច្រើន​សតវត្ស​មកហើយ។
    ប្រាសាទនេះមានទំហំជាង 4 ហិចតា គឺជាវិមានសាសនាដ៏ធំបំផុតមួយនៅក្នុងពិភពលោក។
    ចាប់តាំងពីត្រូវបានសាងសង់ឡើងដោយព្រះបាទសូរ្យវរ្ម័នទី២ ដែលបានគ្រប់គ្រងទឹកដី ពីឆ្នាំ ១១១៣ ដល់ឆ្នាំ
    ១១៥០ ប្រាសាទត្រូវបានគេចាត់ទុកថាជា "ទីក្រុងប្រាសាទ" នៅក្នុងទឹកដីសុវណ្ណភូមិនេះ ដូចជាមជ្ឈមណ្ឌលនយោបាយ
    និងប្រាសាទរបស់រដ្ឋ។`,
    `ទម្រង់របាំបុរាណជាច្រើននៅក្នុងប្រទេសកម្ពុជា សុទ្ធសឹងតែជាទម្រង់សិល្បៈដែលមានស្ទីលខ្ពស់ ធ្លាប់ត្រូវបានបង្ខាំងទុកជាចម្បងនៅក្នុងតុលាការនៃព្រះបរមរាជវាំង និងសម្តែងជាចម្បងដោយស្ត្រី។
    គេស្គាល់ជាផ្លូវការជាភាសាខ្មែរថា របាំអប្សរា ហើយអ្នករបាំនៃទម្រង់បុរាណនេះ ច្រើនតែហៅថា អ្នករបាំអប្សរា។ របាំអប្សរា គឺជារបាំមួយក្នុងចំណោមរបាំជាច្រើននៅក្នុងរបាំបុរាណខ្មែរ។
    របាំ​នេះ​ត្រូវ​បាន​បង្កើត​ឡើង​នៅ​ពាក់​កណ្តាល​សតវត្ស​ទី​២០ ដោយ​របាំ​ព្រះរាជទ្រព្យ​កម្ពុជា ក្រោម​ការ​ឧបត្ថម្ភ​របស់​ព្រះនាង​ស៊ីសុវត្ថិ កុសមៈ។
    ទម្រង់របាំនេះត្រូវបានណែនាំជាលើកដំបូងទៅកាន់បរទេស និងល្បីល្បាញក្នុងអំឡុងទសវត្សរ៍ឆ្នាំ <b>១៩៦០</b> ថាជារបាំព្រះរាជទ្រព្យខ្មែរ។ 
    អ្នករាំរបាំព្រះរាជទ្រព្យដំបូងគឺព្រះអង្គម្ចាស់នរោត្តមសីហនុ។`,
    `ប្រាសាទបាខែង ស្ថិតនៅភាគពាយ័ព្យនៃប្រាសាទអង្គរវត្ត ចំងាយប្រហែល ១.៥០០ម៉ែត្រ បង្កើតបានជាតំបន់ដ៏ល្អឥតខ្ចោះសម្រាប់ទស្សនាបេតិកភណ្ឌពិភពលោកពីចម្ងាយ។
    ហើយពេល​និយាយ​អំពី​ប្រាសាទ​ខ្ពស់​បំផុត​របស់​អង្គរ គឺភ្នំ​បាខែង​ឈរ​នៅ​ទី​មួយ​។ ភ្នំនោះបានផ្តល់នូវទេសភាពដ៏ល្អបំផុត និងស្រស់ស្អាតបំផុតនៅក្នុងតំបន់ជុំវិញ។ 
    ជាងនេះទៅទៀត ប្រាសាទបាខែង គឺជាសំណង់ដ៏អស្ចារ្យមួយ ដែលទាក់ទាញភ្ញៀវទេសចរណ៍យ៉ាងច្រើនកុះករជារៀងរាល់ថ្ងៃ តាំងពីងងឹតរហូតដល់ព្រឹកព្រលឹម។ 
    ប្រាសាទ​នេះ​ជា​កន្លែង​ដ៏​ល្បីល្បាញ និង​ល្អ​ឥត​ខ្ចោះ​សម្រាប់​ថត​រូប​ថ្ងៃ​រះ​ដ៏​ស្រស់​ស្អាត។ មនុស្សជាច្រើនចូលចិត្តក្រោកពីម៉ោង ៥ ព្រឹក ទៅវត្ត ហើយរង់ចាំថ្ងៃរះ។ 
    បន្ទាប់ពីម៉ោង ៨ ឬ ៩ ព្រឹក ពួកគេចេញពីប្រាសាទដើម្បីទទួលទានអាហារពេលព្រឹក ប៉ុន្តែមានអ្នកទេសចរជាច្រើននាក់ទៀតដែលបន្តឡើង។ នៅ​មុន​ពេល​ល្ងាច 
    មនុស្ស​ម្នា​ចាប់​ផ្ដើម​ទៅ​វត្ត​ម្ដង​ទៀត​នៅ​ប្រហែល​ម៉ោង ៣ ទៅ ៤ រសៀល។ ពេលទៅដល់កំពូល គេនឹងរង់ចាំមើលទេសភាពថ្ងៃលិចដ៏ស្រស់ស្អាតមួយទៀត។ `,
    `ប្រាសាទបាគង ឬហៅម្យ៉ាងទៀតថា ឥន្ទ្រវរា គឺជាប្រាសាទដ៏ស្រស់ស្អាតបំផុតមួយក្នុងខេត្តសៀមរាប ហើយជាប្រាសាទភ្នំថ្មភក់ដំបូងគេដែលត្រូវបានកសាងឡើង
    ដោយអ្នកគ្រប់គ្រងនៃអាណាចក្រខ្មែរនៅអង្គរក្បែរក្រុងសៀមរាបសម័យទំនើបក្នុងប្រទេសកម្ពុជា។ ក្នុងទស្សវត្សរ៍ចុងក្រោយនៃសតវត្សទី៩ នៃគ.ស វាបានបម្រើការ 
    ជាប្រាសាទរដ្ឋផ្លូវការរបស់ព្រះបាទឥន្ទ្រវរ្ម័នទី១ ក្នុងទីក្រុងបុរាណហរិហរាល័យ ដែលមានទីតាំងនៅតំបន់ដែលសព្វថ្ងៃហៅថារលួស។`,
    `ប្រសាទបាយ័ន គឺត្រូវបានស្គាល់យ៉ាងច្បាស់និង ជាប្រាសាទខ្មែរដែលរចនាបានយ៉ាងប្រណិតនៅក្នុងតំបន់អង្គរនៅកម្ពុជា។ ត្រូវបានកសាងឡើងក្នុងចុងសតវត្សទី12 រឺដើមសតវត្សទី13
    ដែលជាប្រាសាទតំណាង នៃពុទ្ធសាសនាមហាយានជ័យវរម្ម័នទី7(Mahaya Buddist King Jayvarman VII) មានទីតាំងនៅចំណុចកណ្តាលនៃរាជធានីរបស់ជ័យវរ្ម័ន, អង្គរធំ។`,
    `ចាប៉ីដងវែង (ជាហ្គីតាខ្មែរពីរខ្សែ កវែង) ប្រើក្នុងវង់ភ្លេងអារក្ស និងភ្លេងការ។ ជាងនេះទៅទៀត វា​ក៏​ត្រូវ​បាន​គេ​ប្រគុំ​ជា​ឧបករណ៍​ទោល​អម​ជាមួយ​នឹង​កំណាព្យ 
    ការនិទានរឿង​ប្រជាប្រិយ ការ​ច្រៀង​តាម​ស្ទីល​ជជែក​វែកញែក និង​ការ​និទាន​រឿង​ប្រឌិត។ ដោយ​សារ​ឧបករណ៍​ដ៏​ពិសេស​នេះ​បាន​នាំ​មក​នូវ​ការ​ពេញ​និយម​យ៉ាង​ខ្លាំង​តាំង​ពី​សម័យ
    ​ដើម​រហូត​មក​ដល់​សព្វ​ថ្ងៃ ហើយ​តន្ត្រី​របស់​វា​ត្រូវ​បាន​ប្រជាជន​ខ្មែរ​ពេញ​ចិត្ត​ជា​ច្រើន​ជំនាន់​មក​ហើយ។`,
    `បេតិកភណ្ឌរូបិយ និងអរូបិយជាច្រើនរបស់កម្ពុជាបានជួយប្រទេសឱ្យមានភាពល្បីល្បាញនៅលើឆាកអន្តរជាតិ ហើយពួកគេគឺជាតួអង្គសំខាន់មួយនៅលើឆាកបេតិកភណ្ឌពិភពលោក។ 
    ម្នាក់​ក្នុង​ចំណោម​នោះ​គឺ ល្ខោនខោល។`,
    `កម្ពុជា​ ជា​ប្រទេស​ពោរពេញ​ដោយ​វប្បធម៌ និង​សម្បូរ​អរិយធម៌​នៅ​អាស៊ីអាគ្នេយ៍។ ក្រៅ​ពី​បេតិកភណ្ឌ​វប្បធម៌ ប្រាសាទ​បុរាណ និង​សិល្បៈ​ប្រពៃណី នៅ​មាន​បេតិកភណ្ឌ​វប្បធម៌​អរូបិយ
    គ្រប់​ទីកន្លែង​ក្នុង​ប្រទេស​កម្ពុជា។ ក៏មានបេតិកភណ្ឌវប្បធម៌អរូបិយផ្សេងៗគ្នាជាច្រើនរបស់ដូនតាខ្មែរផងដែរ។ របាំប្រពៃណីខ្មែរមានក្បាច់ផ្សេងៗ។ របាំ​មួយ​ក្នុង​ចំណោម​នោះ​  
    គឺ​របាំ​ព្រះមុនី​មេខឡា​ដែល​ជា​របាំ​ប្រពៃណី​ដែល​មាន​ប្រជាប្រិយ​ភាព​ក្នុង​ចំណោម​ប្រជាជន​កម្ពុជា។`
];
var dataRow = document.getElementById('data-row');

const getRowData = () => {
    var dataTable = '';
    for (let i = 0; i < totalData.length; i++) {
        // dataTable += image[i]
        dataTable += `<div class="data-column">
        <div class="column column-img">
            <img src="${image[i]}" alt="${image[i]}" width="100%" id="image">
        </div>
        <div class="column column text">
            <span class="column-title">
                <h3 id="title">${title[i]}</h3>
            </span>
            <p class="column-detail" id="detail">
            ${detail[i]}
            </p>
            <button class="read-more">
                <b>អានបន្ថែម</b>
            </button>
        </div>
    </div>`;
    }
    dataRow.innerHTML = dataTable
    console.log(dataRow);
}
getRowData()