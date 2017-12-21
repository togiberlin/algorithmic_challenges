class Main {

  /**
  * This is a reimplemented SwapCase method in Java.
  * Compared to regular SwapCase method, it takes a len parameter.
  *
  * @author togiberlin
  */

  public static void main(String[] args) {
    System.out.println(swapCase("Hello World!", 6));
  }

  public static String swapCase(String str, int len) {
    char[] charArray = str.toCharArray();

    for (int i = 0; i < len; i++) {
      char character = charArray[i];

      if (Character.isUpperCase(character)) {
        charArray[i] = Character.toLowerCase(character);
      } else if (Character.isLowerCase(character)) {
        charArray[i] = Character.toUpperCase(character);
      }
    }

    return new String(charArray);
  }
}
