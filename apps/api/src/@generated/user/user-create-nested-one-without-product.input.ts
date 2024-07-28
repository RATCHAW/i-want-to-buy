import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProductInput } from './user-create-without-product.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProductInput } from './user-create-or-connect-without-product.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutProductInput {

    @Field(() => UserCreateWithoutProductInput, {nullable:true})
    @Type(() => UserCreateWithoutProductInput)
    create?: UserCreateWithoutProductInput;

    @Field(() => UserCreateOrConnectWithoutProductInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProductInput)
    connectOrCreate?: UserCreateOrConnectWithoutProductInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
