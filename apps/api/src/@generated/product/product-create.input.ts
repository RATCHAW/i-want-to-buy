import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateimagesInput } from './product-createimages.input';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutProductInput } from '../user/user-create-nested-one-without-product.input';

@InputType()
export class ProductCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: ProductCreateimagesInput;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutProductInput, {nullable:false})
    user!: UserCreateNestedOneWithoutProductInput;
}
