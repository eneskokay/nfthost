const { check } = require("express-validator");

exports.WalletLoginValidator = [

    // Address Validator
    check('address', 'address is empty')
    .notEmpty(),

    // Wallet Validator
    check('wallet', 'wallet is empty')
    .notEmpty(),
    
];

exports.GetMemberByAddressValidator = [

    // Address Validator
    check('address', 'address is empty')
    .notEmpty(),
    
];

exports.AddCountValidator = [

    // Address Validator
    check('address', 'address is empty')
    .notEmpty(),

    // Service Validator
    check('service', 'service is empty')
    .notEmpty(),
    
    // Value Validator
    check('value', 'value is empty')
    .notEmpty(),

];

exports.AddFreeValidator = [

    // Address Validator
    check('address', 'address is empty')
    .notEmpty(),

    // Service Validator
    check('service', 'service is empty')
    .notEmpty(),
    
    // Value Validator
    check('value', 'value is empty')
    .notEmpty(),

];

exports.DeductFreeValidator = [

    // Address Validator
    check('address', 'address is empty')
    .notEmpty(),

    // Service Validator
    check('service', 'service is empty')
    .notEmpty(),
    
    // Value Validator
    check('value', 'value is empty')
    .notEmpty(),

];

exports.PaymentRequestValidator = [

    // Email Validator
    check('email', 'email is empty')
    .notEmpty(),
    
    // Amount Validator
    check('amount', 'amount is empty')
    .notEmpty(),

];

exports.CreateWebsiteValidator = [

    // components.title Validator
    check('components.title', 'components.title is empty')
    .notEmpty(),

    // components.unrevealedImage Validator
    check('components.unrevealedImage', 'components.unrevealedImage is empty')
    .notEmpty(),

    // components.description Validator
    check('components.description', 'components.description is empty')
    .notEmpty(),

    // components.embed Validator
    check('components.embed', 'components.embed is empty')
    .notEmpty(),
];

exports.GetWebsiteValidator = [

    // websiteId Validator
    check('websiteId', 'websiteId is empty')
    .notEmpty(),
    
]

exports.GetWebsitesValidator = [

    // memberId Validator
    check('memberId', 'memberId is empty')
    .notEmpty(),
    
]

exports.UpdateWebsiteValidator = [

    // websiteId Validator
    check('websiteId', 'websiteId is empty')
    .notEmpty(),

]

exports.DeductCountValidator = [

    // Address Validator
    check('address', 'address is empty')
    .notEmpty(),

    // Service Validator
    check('service', 'service is empty')
    .notEmpty(),
    
    // Value Validator
    check('value', 'value is empty')
    .notEmpty(),

]

exports.DeleteWebsiteValidator = [

    // websiteId Validator
    check('websiteId', 'websiteId is empty')
    .notEmpty(),

]

exports.AddPaymentValidator = [

    // websiteId Validator
    check('memberId', 'memberId is empty')
    .notEmpty(),

    // hash Validator
    check('hash', 'hash is empty')
    .notEmpty(),

    // service Validator
    check('service', 'service is empty')
    .notEmpty(),

    // price Validator
    check('price', 'price is empty')
    .notEmpty(),

]

exports.UpdateEmailValidator = [

    // websiteId Validator
    check('memberId', 'memberId is empty')
    .notEmpty(),

    // email Validator
    check('email', 'email is empty')
    .notEmpty(),

    check('email', 'email is invalid')
    .isEmail(),
]

exports.UpdateExpirationValidator = [

    // websiteId Validator
    check('websiteId', 'websiteId is empty')
    .notEmpty(),

    // isExpired Validator
    check('isExpired', 'isExpired is empty')
    .notEmpty(),
]

exports.LogoutValidator = [

    // refreshToken Validator
    check('refreshToken', 'refreshToken is empty')
    .notEmpty(),

]

exports.RenewTokenValidator = [

    // refreshToken Validator
    check('refreshToken', 'refreshToken is empty')
    .notEmpty(),

]

exports.UpdateTemplateValidator = [

    // websiteId Validator
    check('websiteId', 'websiteId is empty')
    .notEmpty(),

    // template Validator
    check('template', 'template is empty')
    .notEmpty(),
]

exports.UpdateStyleValidator = [

    // websiteId Validator
    check('websiteId', 'websiteId is empty')
    .notEmpty(),

    // style Validator
    check('style', 'style is empty')
    .notEmpty(),
]

exports.UpdateRevealDateValidator = [

    // websiteId Validator
    check('websiteId', 'websiteId is empty')
    .notEmpty(),

    // revealDate Validator
    check('revealDate', 'revealDate is empty')
    .notEmpty(),

]