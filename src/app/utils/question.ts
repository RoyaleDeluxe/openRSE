
export interface IAnswer {
    value: string;
    description: string;
}

export class Question {
    title: string;
    answers!: IAnswer[];
    goodAnswer: number;
    img: string;

    constructor(title: string, answers: IAnswer[] = [], goodAnswer: number, img: string) {
        this.title = title;
        this.answers = answers;
        this.goodAnswer = goodAnswer;
        this.img = img;
    }

    isGoodAnswer(answer: number): boolean {
        return answer == this.goodAnswer;
    }

    getAnswer(index: number): IAnswer {
        if (index < this.answers.length) {
            return this.answers[index];
        }

        return { value: '', description: '' };
    }
}

/*



const answers2: IAnswer[] = [
    { value: '', description: '' },
    { value: '', description: '' },
    { value: '', description: '' },
    { value: '', description: '' },
];

export const QUEST2 = new Question("Question2", answers2, 1, "microsoft.jpg");

*/


const answers1: IAnswer[] = [
    { value: 'Ils empêchent complètement la collecte de données personnelles.', description: 'Pas toujours, cela dépend de la configuration et des services utilisés avec ces logiciels.' },
    { value: 'Ils sont tous développés par des entreprises européennes.', description: 'Faux, des logiciels libres sont développés partout dans le monde, y compris aux États-Unis.' },
    { value: 'Ils garantissent plus de transparence et de contrôle sur les données.', description: 'Les logiciels libres permettent d’auditer leur code source, évitant ainsi les portes dérobées et la collecte cachée de données.' },
    { value: 'Ils sont tous gratuits et sans aucune faille de sécurité.', description: 'Faux, un logiciel libre peut être payant et, comme tout logiciel, il peut avoir des failles.' },
];

export const QUEST1 = new Question("Pourquoi utiliser des logiciels libres permet de se libérer des GAFAM ?", answers1, 2, "apple.jpg");


const answers2: IAnswer[] = [
    { value: 'Android', description: 'Bien qu’Android soit basé sur Linux, la version classique est fortement contrôlée par Google.' },
    { value: 'iOS', description: 'iOS est un système propriétaire d’Apple.' },
    { value: 'ChromeOS', description: 'ChromeOS est basé sur Linux mais reste contrôlé par Google.' },
    { value: 'Linux', description: 'Linux est un OS libre qui offre plusieurs distributions adaptées aux besoins des utilisateurs.' },
];

export const QUEST2 = new Question("Quel est un exemple d’alternative libre à Windows et macOS ?", answers2, 3, "microsoft.jpg");


const answers3: IAnswer[] = [
    { value: 'DuckDuckGo', description: 'Il ne trace pas les utilisateurs et respecte la vie privée.' },
    { value: 'Chrome', description: 'Chrome est un navigateur, pas un moteur de recherche.' },
    { value: 'Safari', description: 'Safari est un navigateur d’Apple, pas un moteur de recherche.' },
    { value: 'Bing', description: 'Bing appartient à Microsoft et n’est pas libre.' },
];

export const QUEST3 = new Question("Quel moteur de recherche libre permet d’éviter Google ?", answers3, 0, "google.jpg");


const answers4: IAnswer[] = [
    { value: 'Google Docs', description: 'Service propriétaire de Google basé sur le cloud.' },
    { value: 'Notepad++', description: 'Éditeur de texte pour le code, pas une alternative à Office.' },
    { value: 'LibreOffice', description: 'Suite bureautique open source compatible avec les formats Microsoft Office.' },
    { value: 'WordPad', description: 'Logiciel de traitement de texte très basique, pas une suite complète.' },
];

export const QUEST4 = new Question("Quelle est une alternative libre à Microsoft Office ?", answers4, 2, "apple.jpg");


const answers5: IAnswer[] = [
    { value: 'Outlook', description: 'Service propriétaire de Microsoft.' },
    { value: 'ProtonMail', description: 'Service chiffré basé en Suisse qui protège la vie privée.' },
    { value: 'Yahoo Mail', description: 'Propriétaire et souvent critiqué pour des failles de sécurité.' },
    { value: 'iCloud Mail', description: 'Géré par Apple, avec une forte intégration dans son écosystème.' },
];

export const QUEST5 = new Question("Quelle messagerie libre et respectueuse de la vie privée peut remplacer Gmail ?", answers5, 1, "google.jpg");


const answers6: IAnswer[] = [
    { value: 'Dropbox', description: 'Service propriétaire qui collecte certaines données.' },
    { value: 'OneDrive', description: 'Stockage cloud de Microsoft.' },
    { value: 'iCloud', description: 'Stockage cloud d’Apple, non libre.' },
    { value: 'Nextcloud', description: 'Permet de créer son propre cloud privé et sécurisé.' },
];

export const QUEST6 = new Question("Quel service de stockage en ligne libre et respectueux de la vie privée peut remplacer Google Drive ?", answers6, 3, "amazon.png");


const answers7: IAnswer[] = [
    { value: 'Edge', description: 'Navigateur propriétaire de Microsoft.' },
    { value: 'Safari', description: 'Propriétaire et développé par Apple.' },
    { value: 'Firefox', description: 'Développé par Mozilla, open source et axé sur la vie privée.' },
    { value: 'Opera', description: 'Basé sur Chromium, mais pas totalement libre et intègre des trackers.' },
];

export const QUEST7 = new Question("Quel navigateur libre et respectueux de la vie privée peut remplacer Google Chrome ?", answers7, 2, "google.jpg");


const answers8: IAnswer[] = [
    { value: '/e/OS', description: 'Un OS basé sur Android mais sans Google, orienté vie privée.' },
    { value: 'HarmonyOS', description: 'Développé par Huawei, mais pas entièrement open source.' },
    { value: 'OxygenOS', description: 'Développé par OnePlus, basé sur Android et contrôlé par Google.' },
    { value: 'Fire OS', description: 'Développé par Amazon, basé sur Android et non libre.' },
];

export const QUEST8 = new Question("Quel système d'exploitation mobile libre peut remplacer Android et iOS ?", answers8, 0, "amazon.png");


const answers9: IAnswer[] = [
    { value: 'Un logiciel gratuit sans aucune publicité.', description: 'Un logiciel libre peut être payant et inclure des options avec ou sans publicité.' },
    { value: 'Un logiciel dont le code source est accessible, modifiable et redistribuable librement.', description: 'C’est la définition même d’un logiciel libre, garantissant transparence et autonomie aux utilisateurs.' },
    { value: 'Un logiciel uniquement développé par des bénévoles.', description: 'Des entreprises comme Red Hat ou Canonical développent aussi des logiciels libres.' },
    { value: 'Un logiciel exclusivement destiné aux systèmes Linux.', description: 'Les logiciels libres existent pour Windows, macOS et d’autres systèmes, pas seulement Linux.' },
];

export const QUEST9 = new Question("Qu'est-ce qu'un logiciel libre ?", answers9, 1, "apple.jpg");


const answers10: IAnswer[] = [
    { value: 'Because.', description: 'Or not to because.' },
    { value: 'Govorim na drugom jeziku.', description: 'Hrvatski je.' },
    { value: 'Pour montrer que des alternatives openSource sont facilement réalisables.', description: 'Ouiiiiiiii !' },
    { value: 'D. La réponse D.', description: 'DDDDDDDDDDDDDDDDDDDDDDDDDD??' },
];

export const QUEST10 = new Question("Why don't you be not to utilise Kahoot ?", answers10, 2, "amazon.jpg");

