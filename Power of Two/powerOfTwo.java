import java.lang.Math;

class Solution {
    public boolean isPowerOfTwo(int n) {
        if(n == 0){
            return false;
        }
       int x = (int) (Math.log(n) / Math.log(2));
        System.out.println((int) Math.pow(2, x));
        if((int) Math.pow(2, x) == n){
            return true;
        }
        return false;
    }
}