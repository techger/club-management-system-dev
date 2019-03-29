<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
Use Illuminate\Support\Facades\Hash;
Use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        // ログイン前にアクセスできる箇所？
        $this->middleware('auth:api', ['except' => ['login', 'register', 'me']]);
    }

    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register()
    {
        $validator = Validator::make(request()->all(), [
            'email' => 'required|unique:users',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => 'Error Registering'], 401);
        }

        $user = [
            'username' => request('username'),
            'email' => request('email'),
            'password' => Hash::make(request('password')),

        ];

        if (User::create($user)) {

            $credentials = request(['email', 'password']);
            if (!$token = auth('api')->attempt($credentials)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
            return $this->respondWithToken($token);
        } else {
            return response()->json(['error' => 'Error Registering'], 401);

        }
    }

    public function update()
    {
        $validator = Validator::make(request()->all(), [
            'name' => 'required',
            'email' => 'required', Rule::unique('users')->ignore(auth('api')->user()->id),
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => 'Error Updating'], 401);
        }
        $user = User::find(auth('api')->user()->id);
        $user->name = request('name');
        $user->email = request('email');
        if ($user->save()) {
            return response()->json(['message' => 'Successfully Updated', 'user' => ['name' => $user->name]], 200);
        } else {
            return response()->json(['error' => 'Error Updating'], 401);
        }
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth('api')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $user = User::where('email', $credentials['email'])->first();
        $token = $this->respondWithToken($token);

        return response()->json(compact('user', 'token'));
//        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth('api')->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth('api')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user' => ['name' => auth('api')->user()->name],
        ]);
    }
}