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
      char ch = charArray[i];

      if (Character.isUpperCase(ch)) {
        charArray[i] = Character.toLowerCase(ch);
      } else if (Character.isLowerCase(ch)) {
        charArray[i] = Character.toUpperCase(ch);
      }
    }

    return new String(charArray);
  }
}
