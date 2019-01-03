package com.coderbyte.easy.java.swapcase;

class SwapCaseCustom {

  /**
  * Have the function swapCase(str) take the str parameter and swap the case
  * of each character. For example: if str is "Hello World" the output should
  * be hELLO wORLD. Let numbers and symbols stay the way they are.
  * @author togiberlin
  */

  public static void main(String[] args) {
    // System.out.println(swapCase("Hello World!", 6));
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
