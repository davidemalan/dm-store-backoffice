import { ChangeEvent, FC, FormEvent, ReactElement, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useAxios from '../../hooks/useAxios';
import { addProduct } from '../../services/api';
import Button from '../button/Button';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { Close } from '../icons/Close';
import { Plus } from '../icons/Plus';
import Loader from '../loader/Loader';

import Styled from './Modal.styles';

interface ModalProps {
  closeModal: () => void;
}

const Modal: FC<ModalProps> = ({ closeModal }): ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [newProduct, setNewProduct] = useState({
    productId: uuidv4(),
    title: '',
    category: '',
    price: 0.01,
    employee: '',
    description: '',
    reviews: [''],
  });

  const { error, isLoading, apiWrapper } = useAxios<string>();

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

  // remove scroll when opened
  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, []);

  useEffect(() => {
    if (error) {
      handleErrorMessage(error);
    }
  }, [error]);

  return (
    <Styled.Modal>
      <Styled.Card>
        {/* close button */}
        <Styled.CardHeader>
          <button onClick={closeModal}>
            <Close />
          </button>
        </Styled.CardHeader>
        <h1>Add new Product</h1>

        <form onSubmit={handleSubmit}>
          {/* simple inputs section */}
          <section>
            <Styled.TextInput
              name="employee"
              value={newProduct.employee}
              onChange={handleInputChange}
              type="text"
              placeholder="Employee"
            />
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
            <Styled.PriceLabel>
              Price:
              <Styled.PriceInput
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                type="number"
                placeholder="Price"
                step=".01"
                min="0.01"
              />
            </Styled.PriceLabel>
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
              backgroundColor="#ededed"
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

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Styled.Card>
    </Styled.Modal>
  );
};

export default Modal;
