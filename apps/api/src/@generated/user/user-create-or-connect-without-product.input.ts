import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProductInput } from './user-create-without-product.input';

@InputType()
export class UserCreateOrConnectWithoutProductInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutProductInput, {nullable:false})
    @Type(() => UserCreateWithoutProductInput)
    create!: UserCreateWithoutProductInput;
}
