//** React */
import React from "react";

// ** Form & Validation */
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FieldInputProps,
} from "formik";
import { validateDescription } from "../../../../../utils/validation/descriptionValidation";
import type { DescriptionProps } from "../../../../../types/types";

//** Data & Hooks */
import { useCheckUser } from "../../../../../hooks/useCheckUser";
import { updateProjectAttribute } from "../../../../../data/mutations/updateProjectAttribute";

//** Custom */
import Loader from "../../../Loader/Loader";
import SideNav from "../../SideNav/SideNav";
import classNames from "classnames";
import {
  XCircleIcon,
  CheckCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/20/solid";

export default function ProjectDescription() {
  const { user, isLoading } = useCheckUser();

  // This is an async function that handles the form submission for updating a project's description.
  async function handleSubmit(
    values: DescriptionProps,
    actions: FormikHelpers<DescriptionProps> // The `actions` parameter is an object with utility functions for handling the form submission, such as `setSubmitting`
  ) {
    try {
      // Call the `updateProjectAttribute` function with an object containing the project slug and the `bio` and `description` fields from the `values` parameter.
      await updateProjectAttribute({
        slug: user?.project?.items[0]?.slug as string,
        bio: values.bio as string,
        description: values.description,
      });
      actions.setStatus({ success: true });
    } catch (error) {
      actions.setStatus({ success: false });
    } finally {
      actions.setSubmitting(false);
    }
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <section className="container max-w-8xl mx-auto mt-10">
        <div className="flex space-x-8">
          <div className="w-2/3">
            <div className="border-[3px] border-indigo-700 shadow-2xl rounded-lg px-20 py-16 bg-white">
              <div className="space-y-8">
                <div className="space-y-6 sm:space-y-5">
                  <div>
                    <h3 className="text-xl mb-2 font-semibold leading-6 text-indigo-700">
                      Description
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm text-gray-600">
                      This information will be displayed publicly so be careful
                      what you share!
                    </p>
                    <Formik
                      initialValues={{
                        bio: user?.project?.items[0]?.bio || "",
                        description: user?.project?.items[0]?.description,
                      }}
                      validationSchema={validateDescription}
                      validateOnChange={true}
                      onSubmit={async (values, actions) => {
                        await handleSubmit(values, actions);
                      }}
                    >
                      {({
                        errors,
                        touched,
                        isSubmitting,
                        status,
                        dirty,
                        resetForm,
                      }) => (
                        <Form>
                          <div className="mt-6 pt-6 grid grid-cols-1 gap-x-4 gap-y-6 border-t-2 border-indigo-700">
                            <div className="col-span-full">
                              <label
                                htmlFor="bio"
                                className="block text-sm font-medium leading-6 text-indigo-700"
                              >
                                Short Description
                              </label>
                              <div className="mt-2">
                                <Field name="bio">
                                  {({
                                    field,
                                  }: {
                                    field: FieldInputProps<string>;
                                  }) => (
                                    <input
                                      {...field}
                                      type="text"
                                      placeholder="A short description of your project like a tagline."
                                      className={classNames(
                                        "w-full rounded-md border-2 border-indigo-500 py-1.5 text-gray-900 placeholder:text-gray-600 text-sm leading-6 pl-2 focus:ring-0",
                                        {
                                          "ring-2 ring-red-500 border-none focus:ring-2":
                                            errors.bio && touched.bio,
                                        }
                                      )}
                                    />
                                  )}
                                </Field>
                                <ErrorMessage
                                  name="bio"
                                  render={(msg) => (
                                    <div className="text-red-500 text-sm mt-2">
                                      {msg}
                                    </div>
                                  )}
                                />
                              </div>
                            </div>
                            <div className="col-span-full">
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium leading-6 text-indigo-700"
                              >
                                Detailed Description
                              </label>
                              <div className="mt-2">
                                <Field name="description">
                                  {({
                                    field,
                                  }: {
                                    field: FieldInputProps<string>;
                                  }) => (
                                    <textarea
                                      {...field}
                                      placeholder="Explain your project in detail. What is it? What does it do? How does it work? What is the problem it solves and more."
                                      rows={6}
                                      onChange={(e) => {
                                        field.onChange(e);
                                      }}
                                      className={classNames(
                                        "w-full rounded-md border-2 border-indigo-500 py-1.5 text-gray-900 placeholder:text-gray-600 text-sm leading-6 pl-2 focus:ring-0",
                                        {
                                          "ring-2 ring-red-500 border-none focus:ring-2":
                                            errors.description &&
                                            touched.description,
                                        }
                                      )}
                                    />
                                  )}
                                </Field>
                                <ErrorMessage
                                  name="description"
                                  render={(msg) => (
                                    <div className="text-red-500 text-sm mt-2">
                                      {msg}
                                    </div>
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex pt-5 justify-end gap-x-3 mt-6">
                            <button
                              type="button"
                              onClick={() => resetForm()}
                              disabled={!dirty || isSubmitting || !touched}
                              className={classNames(
                                "rounded-md bg-white py-2 px-3 text-sm font-semibold border border-red-500 text-red-500 shadow-sm hover:bg-gray-50",
                                { "opacity-50": !dirty }
                              )}
                            >
                              Cancel Changes
                            </button>

                            {status !== undefined ? (
                              <button
                                type="submit"
                                disabled={status?.success || isSubmitting}
                                className={classNames(
                                  "inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                  {
                                    "opacity-90 bg-green-800": status?.success,
                                    "bg-red-600": !status?.success,
                                  }
                                )}
                              >
                                {status?.success ? (
                                  <span className="flex justify-center items-center">
                                    Changes Saved
                                    <CheckCircleIcon
                                      width={25}
                                      className="ml-2"
                                    />
                                  </span>
                                ) : (
                                  <span className="flex justify-center items-center">
                                    Failed, Try Again
                                    <XCircleIcon width={25} className="ml-2" />
                                  </span>
                                )}
                              </button>
                            ) : (
                              <button
                                type="submit"
                                disabled={isSubmitting || !dirty}
                                className={classNames(
                                  "inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                  { "opacity-90": !dirty }
                                )}
                              >
                                <span className="flex justify-center items-center">
                                  Save Changes
                                  <PlusCircleIcon width={25} className="ml-2" />
                                </span>
                              </button>
                            )}
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <SideNav />
          </div>
        </div>
      </section>
    </>
  );
}