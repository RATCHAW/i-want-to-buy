import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutProductInput } from './user-update-without-product.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProductInput } from './user-create-without-product.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutProductInput {

    @Field(() => UserUpdateWithoutProductInput, {nullable:false})
    @Type(() => UserUpdateWithoutProductInput)
    update!: UserUpdateWithoutProductInput;

    @Field(() => UserCreateWithoutProductInput, {nullable:false})
    @Type(() => UserCreateWithoutProductInput)
    create!: UserCreateWithoutProductInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
