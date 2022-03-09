// 객체 (Object)
let oshmos = {
    name: 'oshmos',
    bornYear: '1997',
    'is Very Tall': true,
    experience: {
        language1: 'python',
        language2: 'dart',
        language3: 'c#',
        language4: 'JS',
        language5: 'Cpp',
        frameWork: 'Django',
    }
};

// 점 표기법 (objectName.propertyName)
console.log(oshmos.bornYear);

// 대괄호 표기법 (objectName['propertyName'])
console.log(oshmos['is Very Tall']);

let propertyName = 'name';
console.log(oshmos[propertyName]);

// 표기법 혼합
console.log(oshmos.experience['language3']);

// 프로퍼티 추가 및 수정하기
oshmos.dream = 'happy';
console.log(oshmos.dream);

// 프로퍼티 삭제하기
console.log(oshmos['is Very Tall']);
delete oshmos['is Very Tall'];
console.log(oshmos['is Very Tall']);

// 프로퍼티의 존재 여부 확인하기
console.log(oshmos.name !== undefined);
// 'propertyName' in object
console.log('name' in oshmos);
// boolean 값을 출력하기 때문에 조건으로 사용하기도 좋음