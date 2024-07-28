import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutProductInput } from './user-update-without-product.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutProductInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutProductInput, {nullable:false})
    @Type(() => UserUpdateWithoutProductInput)
    data!: UserUpdateWithoutProductInput;
}
