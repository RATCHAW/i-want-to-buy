import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutUserInput } from './product-create-without-user.input';

@InputType()
export class ProductCreateOrConnectWithoutUserInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutUserInput, {nullable:false})
    @Type(() => ProductCreateWithoutUserInput)
    create!: ProductCreateWithoutUserInput;
}
