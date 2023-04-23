"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tutor = void 0;
const typeorm_1 = require("typeorm");
let Tutor = class Tutor {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Tutor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 50,
    }),
    __metadata("design:type", String)
], Tutor.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 50,
    }),
    __metadata("design:type", String)
], Tutor.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tutor.prototype, "emailAddress", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tutor.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tutor.prototype, "experience", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tutor.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tutor.prototype, "modeOfDelivery", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tutor.prototype, "contactDetails", void 0);
Tutor = __decorate([
    (0, typeorm_1.Entity)()
], Tutor);
exports.Tutor = Tutor;
//# sourceMappingURL=Tutor.js.map