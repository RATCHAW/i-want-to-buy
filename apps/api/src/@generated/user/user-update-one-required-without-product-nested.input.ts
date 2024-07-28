import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProductInput } from './user-create-without-product.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProductInput } from './user-create-or-connect-without-product.input';
import { UserUpsertWithoutProductInput } from './user-upsert-without-product.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutProductInput } from './user-update-to-one-with-where-without-product.input';

@InputType()
export class UserUpdateOneRequiredWithoutProductNestedInput {

    @Field(() => UserCreateWithoutProductInput, {nullable:true})
    @Type(() => UserCreateWithoutProductInput)
    create?: UserCreateWithoutProductInput;

    @Field(() => UserCreateOrConnectWithoutProductInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProductInput)
    connectOrCreate?: UserCreateOrConnectWithoutProductInput;

    @Field(() => UserUpsertWithoutProductInput, {nullable:true})
    @Type(() => UserUpsertWithoutProductInput)
    upsert?: UserUpsertWithoutProductInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutProductInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutProductInput)
    update?: UserUpdateToOneWithWhereWithoutProductInput;
}
