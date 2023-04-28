<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Category;
use App\Models\Dish;
use App\Models\Restaurant;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $emptyFilter= new \stdClass();
        $emptyFilter->name=null;
        $emptyFilter->category_id=null;

//        $emptyOrder=new \stdClass();
//        $emptyOrder->field=null;
//        $emptyOrder->direction=null;

        $filter=$request->session()->get("book_filter", $emptyFilter);
//        $order=$request->session()->get("dish_order",$emptyOrder);


        return inertia('Books/Index',[

            'books'=>Book::filter($filter)->with( 'category')->get(),



//        'books'=>Book::with('category')->get(),

            'categories'=>Category::all(),
            "filter"=>$filter,

        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create(Book $book)
    {
        $categories=Category::all();
        return inertia('Books/Create',[

            'book'=>$book,
            'categories'=>$categories

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $book=new Book();
        $book->fill($request->all());
        if ($request->file("image")!=null){
            $request->file("image")->store("/public/books");
            $book->image=$request->file("image")->hashName();
        }


        $request->validate([
            'name'=>'required',
        ],
            [
                'name'=>'Knygos pavadinimas yra privalomas',
            ]);
//        Dish::create($request->all());
        $book->save();

        return to_route("books.index");
    }


    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        $categories=Category::all();
        return inertia('Books/Edit', [
            "book"=>$book,
            'categories'=>$categories

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        $book->fill($request->all());

        if ($request->file("image")!=null){
//            if ($dish->photo!=null){
//                unlink(storage_path()."/app/public/dishes/".$dish->photo);
//
//            }

            $request->file("image")->store("/public/books");
            $book->image=$request->file("image")->hashName();
        }

        $book->save();
        return to_route('books.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        $book->delete();
        return to_route("books.index");
    }

    public function filter(Request $request){
        $filter=new \stdClass();
        $filter->name=$request->name;

        $filter->category_id=$request->category_id;

        $request->session()->put("book_filter",$filter);
        to_route("books.index");
    }
}
