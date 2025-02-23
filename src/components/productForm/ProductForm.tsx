import { ChangeEvent, FC, FormEvent, ReactElement, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useShallow } from 'zustand/shallow';

import { colors } from '../../consts';
import useAxios from '../../hooks/useAxios';
import { addProduct } from '../../services/api';
import { useGlobalStore } from '../../store/hooks';
import Button from '../button/Button';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { Plus } from '../icons/Plus';
import Loader from '../loader/Loader';

import Styled from './ProductForm.styles';

interface ProductFormProps {
  updateProducts: () => void;
}

const ProductForm: FC<ProductFormProps> = ({ updateProducts }): ReactElement => {
  const [store] = useGlobalStore(useShallow((state) => [state.store]));

  const [errorMessage, setErrorMessage] = useState<string>();
  const [newProduct, setNewProduct] = useState({
    productId: uuidv4(),
    title: '',
    category: '',
    price: 0,
    employee: store?.employees[0] ?? '',
    description: '',
    reviews: [''],
  });

  const { data: newProductData, error, isLoading, apiWrapper } = useAxios<string>();

  // on submit add product
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !newProduct.title ||
      !newProduct.category ||
      !newProduct.price ||
      !newProduct.employee ||
      !newProduct.description
    ) {
      handleErrorMessage('missing product properties');
    } else {
      apiWrapper(() => addProduct(newProduct));
    }
  };

  // on error show message for 2 sec
  const handleErrorMessage = (message: string) => {
    setErrorMessage(message);

    setTimeout(() => {
      setErrorMessage(undefined);
    }, 2000);
  };

  // on change input update state based on input name
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // on employee  change
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNewProduct((prev) => ({
      ...prev,
      employee: event.target.value,
    }));
  };

  // on change input update state based on input name
  const handleReviewChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const index = parseInt(name.split('_')[1], 10);

    // new array to update state
    const updatedReviews = [...newProduct.reviews];
    updatedReviews[index] = value;

    setNewProduct((prev) => ({
      ...prev,
      reviews: updatedReviews,
    }));
  };

  // add review space
  const addReview = (event: FormEvent<HTMLFormElement>) => {
    // prevent default triggering of submit
    event.preventDefault();

    const newReviews = [...newProduct.reviews, ''];

    setNewProduct({
      ...newProduct,
      reviews: newReviews,
    });
  };

  // map employees from store
  const renderEmployeesOptions = () => {
    return store?.employees.map((employee) => (
      <option
        key={employee}
        value={employee}
      >
        {employee}
      </option>
    ));
  };

  useEffect(() => {
    if (error) {
      handleErrorMessage(error);
    }
  }, [error]);

  useEffect(() => {
    if (newProductData) {
      updateProducts();
    }
  }, [newProductData, updateProducts]);

  return (
    <>
      <h1>Add new Product</h1>

      <form onSubmit={handleSubmit}>
        {/* simple inputs section */}
        <section>
          <Styled.InputLabel>
            Employee:
            {store?.employees && (
              <Styled.SelectInput
                name="employee"
                value={newProduct.employee}
                onChange={handleSelectChange}
              >
                {renderEmployeesOptions()}
              </Styled.SelectInput>
            )}
          </Styled.InputLabel>

          <Styled.TextInput
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            type="text"
            placeholder="Category"
          />
          <Styled.TextInput
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
            type="text"
            placeholder="Title"
          />
        </section>

        <section>
          {/* description long input */}
          <Styled.LongInput
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            placeholder="Description"
          />

          {/* price input with label because of no placeholder */}
          <Styled.InputLabel>
            Price:
            <Styled.PriceInput
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              type="number"
              placeholder="Price"
              step=".01"
              min="0"
            />
          </Styled.InputLabel>
        </section>

        {/* reviews */}
        <section>
          <h4>Reviews:</h4>
          {newProduct.reviews.map((review, i) => (
            <Styled.LongInput
              key={`review_${i}`}
              name={`review_${i}`}
              value={review}
              onChange={handleReviewChange}
              type="text"
              placeholder={`Review ${i + 1}`}
            />
          ))}
          <Button
            backgroundColor={colors.gray200}
            rounded
            onClick={(event) => addReview(event as FormEvent<HTMLFormElement>)}
          >
            <Plus title="Add review" />
          </Button>
        </section>

        {/* submit input not Button for accessibility */}
        {isLoading ? (
          <Loader />
        ) : (
          <section>
            <Styled.SubmitButton
              type="submit"
              value="Add Product"
            />
          </section>
        )}
      </form>

      {/* error message pop up */}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};

export default ProductForm;
