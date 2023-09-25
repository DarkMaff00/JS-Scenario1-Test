Feature: User is able to register to e-commerce site and then add items to the shopping cart and to the wish list

  Scenario: Create an account
    Given User is on register page
    When User provided correct data in form
    Then Account has been created

  Scenario: Add items to the wish list
    Given User logged
    When Click Add to Wish List button
    Then Items in wish list.

  Scenario: Add items to cart
    Given User logged
    When Click Add to Cart button
    Then Items in cart
